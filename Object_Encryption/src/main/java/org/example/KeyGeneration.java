package org.example;

import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Base64;

public class KeyGeneration {
    public static void main(String[] args) {
        try{
            java.security.KeyPair keyPair = generateKeys();
            System.out.println("Keypair generated and that are "+keyPair);
            PublicKey publicKey = keyPair.getPublic();
            PrivateKey privateKey = keyPair.getPrivate();
            System.out.println("Public key "+ Base64.getEncoder().encodeToString(publicKey.getEncoded()));
            System.out.println("Private key "+Base64.getEncoder().encodeToString(privateKey.getEncoded()));
;        }catch (Exception e){
            System.out.println("Error while generating keys"+e.getMessage());
        }
    }
    public static java.security.KeyPair generateKeys(){
        try{
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(1024);
            return keyPairGenerator.generateKeyPair();
        }catch (Exception e){
            System.out.println("Error while generate key function"+e.getMessage());
        }
        return null;
    }

}
