import {Injectable} from 'angular2/core';
import {Http, URLSearchParams}    from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export interface ImagesInterface {
  previewHeight: number,
  likes: number,
  favorites: number,
  tags: string,
  webformatHeight: number,
  views: number,
  webformatWidth: number,
  previewWidth: number,
  comments: number,
  downloads: number,
  pageURL: string,
  previewURL: string,
  webformatURL: string,
  imageWidth: number,
  user_id: number,
  user: string,
  type: string,
  id: number,
  userImageURL: string,
  imageHeight: number
}


@Injectable()
export class ImagesService {
    url: string;

    constructor(private http:Http) {
        this.url = 'https://pixabay.com/api/?key=13458-407c2fb8563aa4b137d7aaad2&image_type=photo&orientation=horizontal&per_page=3';
        // this.url = './mock/images.json';
    }

    getData(query) {

        const searchParams = new URLSearchParams()
        searchParams.set('q', query);

        return this.http.get(this.url, {search: searchParams})
                .map(res => res.json())
    }
}
