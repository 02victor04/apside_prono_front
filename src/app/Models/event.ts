export class Event {


    constructor(
        public id: number,
        public label: string,
        public eventDate: Date,
        public openDate: Date,
        public closeDate: Date,
        public coeff: number,
        public idContest: number
    ) { }

    

}