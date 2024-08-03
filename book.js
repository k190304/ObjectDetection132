status = "";

function preload()
{
    img = loadImage('book.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults()
{
    if(error)
        {
            console.log(error);
        }
        console.log(results);
}

function back()
{
    window.location('index.html');
}