abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        // complex calculation
        return 8
    }
}


class Instagram1 extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia value")
    }
}
const githubTest=new Instagram1("test", "test", 3)
githubTest.getReelTime()