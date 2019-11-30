export class Company {
    private _companyName: string;
    public get companyName(): string {
        return this._companyName;
    }
    public set companyName(value: string) {
        this._companyName = value;
    }
    private _ceoName: string;
    public get ceoName(): string {
        return this._ceoName;
    }
    public set ceoName(value: string) {
        this._ceoName = value;
    }
    private _turnOver: string;
    public get turnOver(): string {
        return this._turnOver;
    }
    public set turnOver(value: string) {
        this._turnOver = value;
    }
    private _briefDescription: string;
    public get briefDescription(): string {
        return this._briefDescription;
    }
    public set briefDescription(value: string) {
        this._briefDescription = value;
    }
    private _ipoDate: string;
    public get ipoDate(): string {
        return this._ipoDate;
    }
    public set ipoDate(value: string) {
        this._ipoDate = value;
    }
}
