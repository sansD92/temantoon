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
        Schema::create('user_subcriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignID('user_id')->constrained();
            $table->foreignID('subcription_plan_id')->constrained();
            $table->foreignID('price');
            $table->dateTime('expired_date')->nullable();
            $table->string('payment_status', 10)->default('pending');
            $table->string('snapToken', 10)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subcriptions');
    }
};
