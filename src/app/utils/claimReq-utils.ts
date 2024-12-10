export const claimReq = {
  adminOnly: (c: any) => c.role == "Admin",
  adminOrOwner: (c: any) => c.role == "Admin" || c.role == "Owner",
  authenticated: (c: any) => c.isAuthenticated,
  notAuthenticated: (c: any) => !c.isAuthenticated,
};

