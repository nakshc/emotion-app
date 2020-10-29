Webcam.set({

    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach("#camera")



function take_snapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("results").innerHTML = '<img id= "captured_image" src="' + data_uri + '"/>';

    })


}




console.log('ml5 version', ml5.version)


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8t_a8ILp6/model.json", modelLoaded);

function modelLoaded() {

    console.log('modelLoaded!')


}





function check() {

    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults)
}





function gotResults(error, results) {

    if (error) {

        console.log(error)

    }

    else {


        console.log(results)
        document.getElementById("results_emotion_name").innerHTML = results[0].label;
        document.getElementById("results_emotion_name2").innerHTML = results[1].label;





        if (results[0].label == "happy") {

            document.getElementById('update_emoji').innerHTML = "&#128522;";

        }


        if (results[0].label == "sad") {

            document.getElementById('update_emoji').innerHTML = "&#128545;";

        }


        if (results[0].label == "angry") {

            document.getElementById('update_emoji').innerHTML = " &#128548;";

        }






        if (results[1].label == "happy") {

            document.getElementById('update_emoji2').innerHTML = "&#128522;";

        }


        if (results[1].label == "sad") {

            document.getElementById('update_emoji2').innerHTML = "&#128545;";

        }


        if (results[1].label == "angry") {

            document.getElementById('update_emoji2').innerHTML = " &#128548;";

        }

    }

}
