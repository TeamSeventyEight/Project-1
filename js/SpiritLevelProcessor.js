/****************************************************************************************
Avaiable functions for usage in the uiController object
================================================================
uiController.bubbleTranslate(x,y, id)
    This function will translate the bubble from the middle of the screen.
    The center of the screen is considered (0,0).
    Inputs:
        x,y
        Translates the bubble x px right and y px up. Negative values are accepted
        and translate the bubble in the opposite direction.
        id
        ID of bubble that needs to be moved
uiController.bodyDimensions()
    Returns the width and height of the body (without the toolbar)
    Return:
        Returns an object with the following fields
        {
            width:      [Returns the width of the body],
            height:     [Returns the width of the body]
        }
ID of HTML elements that are of interest
==============================================================
dark-bubble
    ID of the dark green bubble
pale-bubble
    ID of the pale green bubble
message-area
    ID of text area at the bottom of the screen, just on top on the "Feeze" button
freeze-button
    ID of the "Freeze" button
****************************************************************************************/

function SpiritLevelProcessor()
{
    var self = this;

    var uiController = null;

    self.initialise = function(controller)
    {
        uiController = controller;

        window.addEventListener("devicemotion", handleMotion);
    }
    
    var xbuffer = [];
    var ybuffer = [];
    var zbuffer = [];
    
    messageTarget = document.getElementById("message-area");
    
    var freezeval = false;

    function handleMotion(event)
    {
        // This function handles the new incoming values from the accelerometer
        
        var x = event.accelerationIncludingGravity.x;
        var y = event.accelerationIncludingGravity.y;
        var z = event.accelerationIncludingGravity.z;
        
        var avgx = movingAverage(xbuffer, x);
        var avgy = movingAverage(ybuffer, y);
        var avgz = movingAverage(zbuffer, z);
        
        var avgx_rounded = Math.round(avgx * 100) / 100;
        var avgy_rounded = Math.round(avgy * 100) / 100;
        var avgz_rounded = Math.round(avgz * 100) / 100;
        
        //Push rounded values to message area
        target = document.getElementById("message-area");
<<<<<<< HEAD
=======
        target.innerHTML = avgx_rounded + ", " + avgy_rounded + ", " + avgz_rounded + "<br>";
        
        displayAngle(avgx,avgy,avgz);   
>>>>>>> origin/master
        
        var angle = displayAngle(avgx,avgy,avgz);
        
        target.innerHTML = avgx_rounded + ", " + avgy_rounded + ", " + avgz_rounded + "         <br>Angle from Z axis: " + angle + "°"; 
            
    }

    function movingAverage(buffer, newValue)
    {
        // This function handles the Moving Average Filter

        // Input:
        //      buffer
        //      The buffer in which the function will apply the moving to.

        //      newValue
        //      This should be the newest value that will be pushed into the buffer

        // Output: filteredValue
        //      This function should return the result of the moving average filter
        
        
        var bufferlength = 20;
        
        if (buffer.length > bufferlength) {
            buffer.splice(0, 1);
            buffer.push(newValue);
        } else {
            buffer.push(newValue);
        }
        
        var sum = buffer.reduce(function(a, b) { return a + b; });
        var avg = sum / buffer.length;
        
        return avg;
        
    }

    function displayAngle(x,y,z)
    {
        // This function will handle the calculation of the angle from the z-axis and
        // display it on the screen inside a "div" tag with the id of "message-area"

        // Input: x,y,z
        //      These values should be the filtered values after the Moving Average for
        //      each of the axes respectively
        
        var xSquared, ySquared, magnitudeXYVector, angle;
        
        xSquared = Math.pow(x,2);
        ySquared = Math.pow(y,2);
        
        magnitudeXYVector = Math.sqrt(xSquared + ySquared);
        
        angle = Math.atan(magnitudeXYVector/z);
		angle = angle * 180 / 3.14159;
       
        return angle;
        
        
        
    }

    self.freezeClick = function()
    {
        // ADVANCED FUNCTIONALITY
        // ================================================================
        // This function will trigger when the "Freeze" button is pressed
        // The ID of the button is "freeze-button"
        
        console.log("asdf");
        
        freezeTarget = document.getElementById("freeze-button");
        if (freezeval === true){
            freezeval = false;
            freezeTarget.innerhtml = "Freeze";
        }else{
            freezeval = true;
            freezeTarget.innerhtml = "Unfreeze";
        }    
    }

    function movingMedian(buffer, newValue)
    {
      // ADVANCED FUNCTIONALITY
      // =================================================================
      // This function handles the Moving Median Filter
      // Input:
      //      buffer
      //      The buffer in which the function will apply the moving to.

      //      newValue
      //      This should be the newest value that will be pushed into the buffer

      // Output: filteredValue
      //      This function should return the result of the moving average filter
    }
}