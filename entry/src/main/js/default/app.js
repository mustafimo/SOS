import prompt from '@system.prompt'
export default {
    onCreate() {
        console.info('AceApplication onCreate');
        clearInterval(this.testInterval);
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
        clearInterval(this.testInterval);
    }
};
