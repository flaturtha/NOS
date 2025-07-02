  if (!assigned) {
    headers["Set-Cookie"] = `${cookieKey}=${variant}; Path=/; Max-Age=31536000; SameSite=None; Secure`;
  } 