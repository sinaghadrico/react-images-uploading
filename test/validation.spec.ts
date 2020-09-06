import {
  isImageValid,
  isMaxFileSizeValid,
  isAcceptTypeValid,
  isMaxNumberValid,
} from '../src/validation';
import { DEFAULT_NULL_INDEX } from '../src/constants';

describe('testing isImageValid', () => {
  it('should return true', () => {
    const actual = isImageValid('image/png');
    expect(actual).toBeTruthy();
  });

  it('should return false', () => {
    const actual = isImageValid('plain/text');
    expect(actual).toBeFalsy();
  });
});

describe('testing isMaxFileSizeValid', () => {
  it('should return true', () => {
    const oneMB = 1024;
    const fiveMB = oneMB * 5;
    const actual = isMaxFileSizeValid(oneMB, fiveMB);
    expect(actual).toBeTruthy();
  });

  it('should return false', () => {
    const oneMB = 1024;
    const twoMB = oneMB * 2;
    const actual = isMaxFileSizeValid(oneMB * 3, twoMB);
    expect(actual).toBeFalsy();
  });
});

describe('testing isAcceptTypeValid', () => {
  it('should return true with null acceptType', () => {
    const acceptType = null;
    const fileType = 'png';
    const actual = isAcceptTypeValid(acceptType, fileType);
    expect(actual).toBeTruthy();
  });
  it('should return true', () => {
    const acceptType = ['png'];
    const fileType = 'png';
    const actual = isAcceptTypeValid(acceptType, fileType);
    expect(actual).toBeTruthy();
  });
  it('should return true with case sensitive', () => {
    const acceptType = ['png'];
    const fileType = 'PNG';
    const actual = isAcceptTypeValid(acceptType, fileType);
    expect(actual).toBeTruthy();
  });
  it('should return false', () => {
    const acceptType = ['jpg'];
    const fileType = 'png';
    const actual = isAcceptTypeValid(acceptType, fileType);
    expect(actual).toBeFalsy();
  });
});

describe('testing isMaxNumberValid', () => {
  it('should return true without keyUpdate', () => {
    const totalNumber = 2;
    const maxNumber = 2;
    const keyUpdate = DEFAULT_NULL_INDEX;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeTruthy();
  });
  it('should return false without keyUpdate', () => {
    const totalNumber = 3;
    const maxNumber = 2;
    const keyUpdate = DEFAULT_NULL_INDEX;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeFalsy();
  });
  it('should return true with keyUpdate', () => {
    const totalNumber = 3;
    const maxNumber = 2;
    const keyUpdate = 0;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeTruthy();
  });
  it('should return false with keyUpdate', () => {
    const totalNumber = 4;
    const maxNumber = 2;
    const keyUpdate = 0;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeFalsy();
  });
  it('should return true without maxNumber and keyUpdate', () => {
    const totalNumber = 4;
    const maxNumber = null;
    const keyUpdate = null;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeTruthy();
  });
  it('should return true without maxNumber but keyUpdate', () => {
    const totalNumber = 4;
    const maxNumber = null;
    const keyUpdate = 0;
    const actual = isMaxNumberValid(totalNumber, maxNumber, keyUpdate);
    expect(actual).toBeTruthy();
  });
});
