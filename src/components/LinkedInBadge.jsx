import { useEffect } from 'react';
import { useWindowSize } from '../hooks/Hooks';

export default function LinkedInBadge() {
  const { width } = useWindowSize();

  const isRenderable = width >= 450;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isRenderable]);

  if (!isRenderable) {
    return null;
  }

  return (
    <div>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="small"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="mcajben"
        data-version="v1"
      >
       <a
          class="badge-base__link LI-simple-link"
          href="https://au.linkedin.com/in/mcajben?trk=profile-badge"
        />
      </div>
    </div>
  );
}