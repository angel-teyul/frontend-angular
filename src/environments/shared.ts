export class SharedEndPoints {
  END_POINTS: any;
  API_URL: string;

  constructor(API_URL: string) {
    this.API_URL = API_URL;
    this.END_POINTS = {
      GET_LUHN: this.API_URL + '/luhn'
    }
  }
}
