<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->double('subtotal',10,2);
            $table->double('shipping',10,2);
            $table->string('discount_code')->nullable();
            $table->double('discount_amount',10,2)->nullable();
            $table->double('grand_total',10,2);
            $table->enum('payment_status',['paid','unpaid','cod'])->default('unpaid');
            $table->enum('status',['canceled','pending','shipped','delivered'])->default('pending');
            $table->timestamp('shipped_date')->nullable();
            $table->string('email');
            $table->string('phone');
            $table->string('city');
            $table->string('zip');
            $table->string('apartment');
            $table->text('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
