using JimsCalculator.Application;
using JimsCalculator.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AppDependencyResolver
    {
        public static void ConfigureJimsCoreServices(this IServiceCollection services)
        {
            services.AddScoped<ICalculateService, CalculateService>();
        }
    }
}
