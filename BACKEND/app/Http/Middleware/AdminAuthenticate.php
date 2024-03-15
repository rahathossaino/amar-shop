<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
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
        return $request->expectsJson() ? null : \response()->json('redirect to');
    }
    protected function authenticate($request, array $guards)
    {
        if ($this->auth->guard('admin')->check()) {
            return $this->auth->shouldUse('admin');
        }

         $this->unauthenticated($request, ['admin']);
    }
}
