<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AdminAuthenticate extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : redirect('/api/admin/login');
    }
    protected function authenticate($request, array $guards)
    {

        if ($this->auth->check() && $this->auth->user()->role==0) {
            return $this->auth->shouldUse('api');
        }
         $this->unauthenticated($request, ['api']);
    }
}
