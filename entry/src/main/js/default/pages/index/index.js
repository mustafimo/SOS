// index.js
import brightness from '@system.brightness';
import router from '@system.router';
import prompt from '@system.prompt'
import app from '@system.app'


export default {
    onReady() {
        prompt.showToast({
            message: 'High battery consumption use it in necessary situations',
            duration: 5000,
        });
    },

// clear the setinterval + set brightness + set screen on
    onShow() {
        brightness.setValue({
            value: 255,
        });
        brightness.setKeepScreenOn({
            keepScreenOn: true,
        });
        clearInterval(this.testInterval);

    },
// Specify the page to be redirected to SOS page.
    launch() {
        router.push({
            uri: 'pages/index/SOS/SOS',
        })
    },
    touchMove(e) { // Handle the swipe event.
        if (e.direction == "right") {
            this.appExit(); // Swipe right to exit.
        } else if (e.direction == "left") {
            this.launch();
        } else if (e.direction == "up"){
            this.appExit(); // Swipe right to exit.
        }else if(e.direction == "down") {
            this.appExit(); // Swipe right to exit.
        }
    },
    appExit() { // Exit the application.
        app.terminate();
    },


}