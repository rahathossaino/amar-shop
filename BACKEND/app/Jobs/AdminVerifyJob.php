<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\AdminVerifyEmail;
use Illuminate\Support\Facades\Mail;

class AdminVerifyJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $data;
    public function __construct($data)
    {
        $this->data=$data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $email=new AdminVerifyEmail($this->data);
        Mail::to($this->data['email'])->send($email);
    }
}
