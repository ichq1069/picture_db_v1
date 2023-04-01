<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentGroup extends Migration
{
    public function up()
    {
        Schema::create('document_group', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("uid", false, true)->unique();
            $table->string("title", 32);
            $table->tinyInteger("is_show", false, true)->default(2);
            $table->integer("orders", false, true)->default(0);
            $table->dateTime("created_at");
            $table->dateTime("updated_at");
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('document_group');
    }
}
