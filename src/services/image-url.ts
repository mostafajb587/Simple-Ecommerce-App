const getCroppedImage= (url :string)=>{
const index=url.indexOf('img/')+'img/'.length;
 return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}
export default getCroppedImage;