import { useEffect, useState } from 'react';

/**
 * Returns whether the current session is authenticated (admin login).
 * `null` while the check is in flight.
 */
export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    let active = true;
    fetch('/api/me', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => active && setAuthenticated(Boolean(d.authenticated)))
      .catch(() => active && setAuthenticated(false));
    return () => {
      active = false;
    };
  }, []);

  return authenticated;
}
