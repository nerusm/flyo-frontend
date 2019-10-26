export class Product {


    private _name: string;
    private _model: string;
    private _subModel1 : string;
    private _subModel2 : string;
    private _subModel3 : string;
    private _size : string;
    private _sport: string;
    private _manufacturer: string;
    private _quantity: number;
    private _id: number;
    

	constructor(name: string, model: string, subModel1: string, subModel2: string, subModel3: string, size: string, sport: string, manufacturer: string, quantity: number, id: number) {
		this._name = name;
		this._model = model;
		this._subModel1 = subModel1;
		this._subModel2 = subModel2;
		this._subModel3 = subModel3;
		this._size = size;
		this._sport = sport;
		this._manufacturer = manufacturer;
		this._quantity = quantity;
		this._id = id;
	}
    

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter subModel1
     * @return {string}
     */
	public get subModel1(): string {
		return this._subModel1;
	}

    /**
     * Getter subModel2
     * @return {string}
     */
	public get subModel2(): string {
		return this._subModel2;
	}

    /**
     * Getter subModel3
     * @return {string}
     */
	public get subModel3(): string {
		return this._subModel3;
	}

    /**
     * Getter size
     * @return {string}
     */
	public get size(): string {
		return this._size;
	}

    /**
     * Getter sport
     * @return {string}
     */
	public get sport(): string {
		return this._sport;
	}

    /**
     * Getter manufacturer
     * @return {string}
     */
	public get manufacturer(): string {
		return this._manufacturer;
	}

    /**
     * Getter quantity
     * @return {number}
     */
	public get quantity(): number {
		return this._quantity;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter model
     * @param {string} value
     */
	public set model(value: string) {
		this._model = value;
	}

    /**
     * Setter subModel1
     * @param {string} value
     */
	public set subModel1(value: string) {
		this._subModel1 = value;
	}

    /**
     * Setter subModel2
     * @param {string} value
     */
	public set subModel2(value: string) {
		this._subModel2 = value;
	}

    /**
     * Setter subModel3
     * @param {string} value
     */
	public set subModel3(value: string) {
		this._subModel3 = value;
	}

    /**
     * Setter size
     * @param {string} value
     */
	public set size(value: string) {
		this._size = value;
	}

    /**
     * Setter sport
     * @param {string} value
     */
	public set sport(value: string) {
		this._sport = value;
	}

    /**
     * Setter manufacturer
     * @param {string} value
     */
	public set manufacturer(value: string) {
		this._manufacturer = value;
	}

    /**
     * Setter quantity
     * @param {number} value
     */
	public set quantity(value: number) {
		this._quantity = value;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    
}
