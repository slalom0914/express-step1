class ImageUploader{
  async upload(file){
    const data = new FormData()
    data.append('file', file)
    //upload presets name : 
    data.append('upload_preset', 'gjjjqtxw')
/*
    GET방식은 파일 첨부를 처리할 수 없다.
    파일 처리는 반드시 POST만 가능함.
    POST에 추가하는 데이터를 입력하고 fetch이용해서 우리가 URL을 만들고
    POST한  데이터를 전송한 다음에 완료가 되면 result받아서 json변환하고 리턴해줌.
    바이너리 파일도 POST방식으로 한다.
    - 미리보기를 제공하자.
    - 우리가 선택한 이미지를 클라우드 올리는 시점은 언제로 할까요?
    - input file change이벤트가 발생했을 때는 미리보기만 처리하고
    실제로 파일을 업로드는 하는 건 입력이나 수정(저장)을 처리할 때 하자
*/
    //https://api.cloudinary.com/v1_1/본인클라우드네임/upload
    const result = await fetch('https://api.cloudinary.com/v1_1/dfxci8qyg/upload',{
      method: 'POST',
      body: data,
    })//end of fetch
    return await result.json()
  }
}
export default ImageUploader