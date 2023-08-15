package br.com.luciano.playfolio.validator;

import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import java.util.Optional;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class ImageValidator {
    public static final String[] EXTENSIONS = {"png", "jpg", "jpeg"};
    public static final String DEFAULT_IMAGE = "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg";

    public void validateImageExtension(String image) {
        String extension = getExtensionByStringHandling(image);
        boolean isValidExtension = false;

        for(int i = 0; i < EXTENSIONS.length; i++) {
            if(extension.equals(EXTENSIONS[i])) {
                isValidExtension = true;
                break;
            }
        }

        if(!isValidExtension) {
            throw new ResponseStatusException(BAD_REQUEST, "Invalid image extension, it should be png, jpg or jpeg");
        }
    }

    public String getExtensionByStringHandling(String filename) {
        return Optional.ofNullable(filename)
                .filter(f -> f.contains("."))
                .map(f -> f.substring(filename.lastIndexOf(".") + 1))
                .orElseThrow(() -> new ResponseStatusException(BAD_REQUEST, "Invalid image extension, it should be png, jpg, or jpeg"));
    }

    public String profileHasImage(String image) {

        if(image == null) {
            image = DEFAULT_IMAGE;
        }
        validateImageExtension(image);

        return image;
    }
}
