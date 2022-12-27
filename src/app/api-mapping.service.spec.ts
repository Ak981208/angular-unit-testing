
import { of } from 'rxjs';

import { ApiMappingService } from './api-mapping.service';

describe('ApiMappingService', () => {
  let service: ApiMappingService;
  let HttpClientSpy:any;

  beforeEach(() => {
    HttpClientSpy={
      get:jest.fn(),
      post:jest.fn
    }
    service = new ApiMappingService(HttpClientSpy);
  });

 

  it('should test getPostsList',()=>{
    const res="Techopsworld"
   const url='https://jsonplaceholder.typicode.com/posts';
   jest.spyOn(HttpClientSpy,'get').mockReturnValue(of(res));
  service.getPostsList();
   expect(HttpClientSpy.get).toBeCalledTimes(1);
   expect(HttpClientSpy.get).toHaveBeenCalledWith(url);
  })

//   it('should test postDatav1',()=>{
//     const command='testing';
//     const res='akhil rathipelly';
//     const url='https://jsonplaceholder.typicode.com/posts';
//     jest.spyOn(HttpClientSpy,'post').mockReturnValue(of(res));
//    service.postList(command);
//    expect(HttpClientSpy.post).toBeCalledTimes(1);
//   })
});