export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3332/nest-b-auth/api/v1";
};
