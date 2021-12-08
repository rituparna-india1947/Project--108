function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/66t-Pl_UK/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        rn1 = Math.floor(Math.random()* 255) + 1;
        rn2 = Math.floor(Math.random()* 255) + 1;
        rn3 = Math.floor(Math.random()* 255) + 1;

        document.getElementById("result_label").innerHTML = "I Can Hear: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + rn1 + ", " + rn2 +", " + rn3 +")";
        document.getElementById("result_confidence").style.color = "rgb(" + rn1 + ", " + rn2 +", " + rn3 +")";

        if (results[0].label == "Cat Meowing") {
            "<img src = 'Cat Image.jpg'>";
        }

        else if (results[0].label == "Cow Mooing") {
            "<img src = 'Cow Image.jpg'>";
        }

        else if (results[0].label == "Dog Barking") {
            "<img src = 'Dog Image.jpg'>";
        }

        else if (results[0].label == "Lion Roaring") {
            "<img src = 'Lion Image.jpg'>";
        }

        else {
            "<img src = 'https://nofilmschool.com/sites/default/files/styles/facebook/public/soundwave.jpg?itok=UGovzxgR'>";
        }
    }
}