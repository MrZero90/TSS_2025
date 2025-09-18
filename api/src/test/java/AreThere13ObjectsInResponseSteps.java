import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import io.cucumber.java.en.Given;

public class AreThere13ObjectsInResponseSteps {

    HttpResponse<String> response = null;

    @Given("I send a GET request to {string} and store the response")
    public void sendAGETRequestTo(String url){

        HttpRequest request = HttpRequest.newBuilder()
        .GET()
        .uri(URI.create("https://api.restful-api.dev/objects"))
        .build();

        try {
            response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

}
