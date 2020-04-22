import { v4 as uuidv4 } from 'uuid';

export class MockService {
    _version: string;
    _sequence: number;

    constructor() {
        this._version = uuidv4();
        this._sequence = 0;
    }

    init = () => {
        console.log("[WM] BlockchainService init");
    };

    isServiceReady(): boolean {
        return true;
    }

    getServiceVersion() {
        return this._version;
    }

    compile = (): any => {
        const bytecode = '{"code":[161,28,235,11,1,0,7,1,70,0,0,0,4,0,0,0,3,74,0,0,0,6,0,0,0,12,80,0,0,0,6,0,0,0,13,86,0,0,0,6,0,0,0,5,92,0,0,0,41,0,0,0,4,133,0,0,0,64,0,0,0,7,197,0,0,0,15,0,0,0,0,0,1,1,0,2,0,1,3,0,2,0,2,5,3,0,3,2,5,3,3,0,6,60,83,69,76,70,62,12,76,105,98,114,97,65,99,99,111,117,110,116,4,109,97,105,110,15,112,97,121,95,102,114,111,109,95,115,101,110,100,101,114,134,239,60,204,18,164,219,227,170,252,154,138,76,34,69,154,205,18,106,159,4,142,188,236,247,177,228,226,204,134,135,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,4,0,11,0,11,1,18,1,1,2],"args":[]}'
        return JSON.stringify(bytecode);
    };

    deploy = (): any => {
        return 'deployed on blockchain at sequence number: ' + this._sequence++;
    };

    interact = (): any => {
        return 'executed success! sequence number: ' + this._sequence++;
    };
}
