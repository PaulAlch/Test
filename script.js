// Create WebGL iframe
var unityIframe = document.createElement('iframe');
unityIframe.src = 'index.html'; 
unityIframe.width = '800';
unityIframe.height = '600';
document.body.appendChild(unityIframe);

// Create screen share frame
var screenShareFrame = document.createElement('iframe');
screenShareFrame.width = '800';
screenShareFrame.height = '600';
document.body.appendChild(screenShareFrame);

// Get screen share media stream
async function startScreenShare() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    screenShareFrame.srcObject = mediaStream;
  } catch (error) {
    console.error('Error accessing screen share:', error);
  }
}

// Call the startScreenShare function when needed, e.g., on a button click event
startScreenShare();