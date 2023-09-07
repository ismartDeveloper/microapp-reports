const menuRoutes = {
  scheduler: '/job-scheduler',
  validate: '/validate',
  default: '/error-reports',
};

const selectedRoute = menuRoutes[selectedMenu] || menuRoutes.default;
this.router.navigate([selectedRoute]);

