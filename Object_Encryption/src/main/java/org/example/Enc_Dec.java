package org.example;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class Enc_Dec {
    public static void main(String[] args) throws Exception {
        String publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWaeUtnpDGloW8bTBQPSUeobz5Th8EzAX/h1zLDd6enRQ0rJOvKLKBc12tteWIXso8KqURvsCk5S1/qiXTHMHQqC+p+HqsffdY3PnPuISiQYsHgF0JZoEDnDme53QxOWZ6pe3N9dr+h99NrI3ToFqqWY7eX1D1OE9i/hiRGEdOXwIDAQAB";
        String privateKey="MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJZp5S2ekMaWhbxtMFA9JR6hvPlOHwTMBf+HXMsN3p6dFDSsk68osoFzXa215YheyjwqpRG+wKTlLX+qJdMcwdCoL6n4eqx991jc+c+4hKJBiweAXQlmgQOcOZ7ndDE5Znql7c312v6H302sjdOgWqpZjt5fUPU4T2L+GJEYR05fAgMBAAECgYAGh5BQW6rTRCOIG4FWamEbJFBMzkxga+7yudCYbAC3CAChjMBYgT7GidiOOvA87EiBNiS2UX6RafWArkU4Fe5/7EINMQoIVxchQVU83U/9O0oy6rkbElnlpT+bAiJ9HDyKkQn46OEu1qg2J7zJtDirXZBXUPg0WmgyibqJimQHQQJBALNc7GEBfEUjNDcFOofUMZnLTuXetRaROvFNpSOCg5yDwKW+HDGgrlyAFZMqeFzDSiA60Nqpkhofe/QXtKhyu+ECQQDWrm/tvxIRGqiFVmA7I+20quqkB5It1gyXX31u3a4WZK3NBx3wT5MKbxKry20rcUKwT76TXTZufewVsb4HfVI/AkA1+9jVVYoekPrtOHCmYxJOtKdZfk9IrItuBy2V43lTSUBZYj/AHBl+k7pqodS6LrkHvEwSFAl6PVGkZOIl9OphAkBvZPgjLx/azDBhb55jUZNISd+S2XLaYdUKvrvBSTnJ2NfuKSE5zrCHm3beuaGeBxkJj3dd0+IolyJnZ2EpVbfVAkBNpdYHkNAmmlgra6GaTEzna4VM/8gSSpRqG/KL4f5NsjZU8NpaEQEns+NUtTuAYhEpicE1ujnM0Mx026t9tLzK";

       Data data = new Data();
       data.numberOfRows = 10;
       data.module = "abc";
       data.subModule = "xyz";
        System.out.println("Original message:"+data);
        // Encrypt using the public key
        String encryptedMessage = encrypt(data.toString(), publicKey);

        System.out.println("Encrypted message: " + new String(encryptedMessage));

        // Decrypt using the private key
        String decryptedMessage = decrypt(encryptedMessage, privateKey);

        System.out.println("Decrypted message "+decryptedMessage);
    }
    public static String encrypt(String message, String  publicKeyString) throws Exception {
        byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyString.getBytes());
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes);
        PublicKey publicKey =  keyFactory.generatePublic(publicKeySpec);

        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);

        return Base64.getEncoder().encodeToString(cipher.doFinal(message.getBytes(StandardCharsets.UTF_8)));
    }

    public static String decrypt(String encryptedMessage, String privateKeyString) throws Exception {
        byte[] privateKeyBytes = Base64.getDecoder().decode(privateKeyString.getBytes());
        PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");

        PrivateKey privateKey= keyFactory.generatePrivate(privateKeySpec);

        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        return new String(cipher.doFinal(Base64.getDecoder().decode(encryptedMessage)), StandardCharsets.UTF_8);
    }
}
