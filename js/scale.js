const STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEVIDER = 100;
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

export const scalePicture = () => {
  buttonScaleBigger.disabled = true;
  //напишите код который позволит пользователю редактировать масштаб изображения
  const clickSmaller = () => {
    let thisScale = parseInt(scaleControl.value, 10);
    buttonScaleBigger.disabled = false;
    thisScale -= STEP;
    scaleControl.value = thisScale;
    scaleControl.value = `${thisScale}%`;
    if(thisScale <= MIN_SCALE){
      buttonScaleSmaller.disabled = true;
    } else {
      buttonScaleSmaller.disabled = false;
    }
    imgUploadPreview.style.transform = `scale(${thisScale / SCALE_DEVIDER})`;
  };
  buttonScaleSmaller.addEventListener('click', clickSmaller);

  const clickBigger = () => {
    let thisScale = parseInt(scaleControl.value, 10);
    buttonScaleSmaller.disabled = false;
    thisScale += STEP;
    scaleControl.value = thisScale;
    scaleControl.value = `${thisScale}%`;
    if (thisScale >= MAX_SCALE) {
      buttonScaleBigger.disabled = true;
    } else {
      buttonScaleBigger.disabled = false;
    }
    imgUploadPreview.style.transform = `scale(${thisScale / SCALE_DEVIDER})`;
  };
  buttonScaleBigger.addEventListener('click', clickBigger);
};

export const resetScale = () => {
  scaleControl.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';

};
