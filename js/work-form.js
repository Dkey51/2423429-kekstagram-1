import { scalePicture, resetScale, } from './scale.js';
import { setDefaultEffect } from './effects.js';
const editPhoto = document.querySelector('.img-upload__overlay');
const closeUploadButton = editPhoto.querySelector('.img-upload__cancel');
const changePhoto = document.querySelector('.img-upload__input');
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const orderForm = document.querySelector('.img-upload__overlay');
const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__form',
  errorClass: 'pristin_error',
  successClass: 'pristin_success',
  errorTextParent: 'img-upload__wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(orderForm.querySelector('.text__hashtags'), (value) =>{
  const hashtagString = value;
  const hashtagArray = hashtagString.split(' ').map((thisHashtag) => thisHashtag.toLowerCase());
  if (hashtagArray.length > 5){
    return false;
  }
  return true;
}, 'не больше 5 хэштегов');

pristine.addValidator(orderForm.querySelector('.text__hashtags'), (value) =>{
  const hashtagString = value;
  const hashtagArray = hashtagString.split(' ').map((thisHashtag) => thisHashtag.toLowerCase());
  const values = {};
  for (let i = 0; i < hashtagArray.length; i++) {
    const thisHashtag = hashtagArray[i];
    if (thisHashtag in values) {
      return false;
    }
    if(!hashtag.test(thisHashtag)){
      return false;
    }
    values[thisHashtag] = true;
  }
  return true;
}, 'хэштеги должны быть уникальными, начинаться с #, длинна не больше 20 символов');
orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

changePhoto.addEventListener('change', () =>{
  editPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
});
const closeForm = ()=>{
  editPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetScale();
  setDefaultEffect();
};
closeUploadButton.addEventListener('click', closeForm);
document.addEventListener('keydown', (evt)=>{
  if(evt.key === 'Escape') {
    closeForm();
  }
});
const setComment = document.querySelector('.text__description');

setComment.addEventListener('keydown', (evt)=>{
  if(evt.key === 'Escape') {
    setComment.blur();
    evt.stopPropagation();
  }
});
scalePicture();


