import HttpService from '@/common/services/http.service';
import { Example } from './example.types';

class ExampleApiService extends HttpService {
  constructor() {
    super({
      baseURL: 'https://64c3cfbd67cfdca3b66051f9.mockapi.io/',
    });
  }
  getExamples() {
    return this.get<Example[]>('/example');
  }
  getExample(id: number) {
    return this.get<Example>(`/example/${id}`);
  }
  updateExample(example: Example) {
    return this.put<Example>(`/example/${example.id}`, example);
  }
}

const exampleApi = new ExampleApiService();

export default exampleApi;
