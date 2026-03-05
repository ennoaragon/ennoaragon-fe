import { useMemo } from 'react';

interface EnvConfig {
  env: string;
}

export const useEnv = (): EnvConfig => {
  return useMemo(() => {
    const nodeEnv = import.meta.env.NODE_ENV;

    return {
      env: nodeEnv || 'development', };
  }, []);
};
