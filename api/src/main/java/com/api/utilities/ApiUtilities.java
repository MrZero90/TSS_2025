package com.api.utilities;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ApiUtilities {

    public static HttpResponse<String> getAllDataFromApi(String apiURL){

        HttpRequest request = HttpRequest.newBuilder()
        .GET()
        .uri(URI.create("https://api.restful-api.dev/objects"))
        .build();
    
        
        try {
            HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
            return response;
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (InterruptedException e) {
            
            e.printStackTrace();
        }

        System.out.println("Something went wrong while getting data from API");
        return null;
    }


}
