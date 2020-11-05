import React from 'react';
import formClasses from '../../common/styles/form.module.scss';
import fb from '../../assets/images/icons/fb.svg';
import google from '../../assets/images/icons/google.svg';

export function SocialMediaAuth() {
  return (
    <div className={formClasses.socialsBlock}>
      <button className={`${formClasses.socialButton} ${formClasses.socialFbButton}`}>
        <img className={formClasses.socilaIcon} src={fb} alt="facebook login" />
      </button>
      <button className={formClasses.socialButton}>
        <img className={formClasses.socilaIcon} src={google} alt="google login" />
      </button>
    </div>
  );
}
