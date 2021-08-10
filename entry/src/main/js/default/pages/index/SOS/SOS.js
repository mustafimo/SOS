import brightness from '@system.brightness';
import app from '@system.app'
export default
{
    data: {
        bgColor: '#000000',
        testInterval: '',
        isShow: true,
    },
//keep the screen on
    onShow(){
     brightness.setKeepScreenOn({
         keepScreenOn: true,
     });
    },
//select setInterval timing from the inputs
    slow(){
        clearInterval(this.testInterval);
        this.testInterval = setInterval(() => {
            this.ChBGcolor();
        }, 1000 )
        this.isShow = false
    },
    mid(){
        clearInterval(this.testInterval);
        this.testInterval = setInterval(() => {
            this.ChBGcolor();
        }, 500 )
        this.isShow = false
    },
    fast(){
        clearInterval(this.testInterval);
        this.testInterval = setInterval(() => {
            this.ChBGcolor();
        }, 200 )
        this.isShow = false
    },

//change background color
    ChBGcolor: function () {
        if (this.bgColor== '#000000'){
            this.bgColor = '#ffffff'
            brightness.setValue({
                value: 255,
            });
        } else {
            brightness.setValue({
                value: 0,
            });
            this.bgColor = '#000000'
        }
    },
// Reset the Interval % unhide items
    refresh() {
        this.bgColor = '#000000'
        this.isShow = true
       clearInterval(this.testInterval);
         brightness.setValue({
                value: 255,});
    },
// Reset on back
    onBackPress(){
        clearInterval(this.testInterval);

    },
// terminate the app
    Exit() { // Exit the application.
        app.terminate();


    }
}
