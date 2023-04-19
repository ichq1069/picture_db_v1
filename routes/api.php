<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentGroupController;
use App\Http\Controllers\EmoGroupController;
use App\Http\Controllers\EmoImageController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ImageItemController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\SeriesController;
use App\Http\Controllers\SourceCategoryController;
use App\Http\Controllers\SourceController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\UserController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::prefix("user")->group(function (Router $router) {
    $router->post("login", [LoginController::class, "login"]);
    $router->get("info", [UserController::class, "info"])->middleware("auth");
    $router->put("update", [UserController::class, "update"])->middleware("auth");
});
Route::prefix("banner")->group(function (Router $router) {
    $router->get("list", [BannerController::class, "list"]);
});
Route::prefix("img")->group(function (Router $router) {
    $router->get("series", [SeriesController::class, "list"]);
    $router->get("list", [ImageController::class, "index"]);
    $router->get("item", [ImageItemController::class, "list"]);
    $router->get("category", [CategoryController::class, "index"]);
    $router->get("download", [ImageItemController::class, "download"])->middleware(["auth"]);
});

Route::prefix("emo")->group(function (Router $router) {
    $router->get("group", [EmoGroupController::class, "index"]);
    $router->get("image", [EmoImageController::class, "index"]);
});

Route::prefix("file")->group(function (Router $router) {
    $router->post("upload", [FileUploadController::class, "upload"])->middleware(["auth"]);
});

Route::prefix("doc")->group(function (Router $router) {
    $router->get("list", [DocumentController::class, "list"]);
    $router->get("show", [DocumentController::class, "show"]);
    $router->get("group", [DocumentGroupController::class, "list"]);
});

Route::prefix("menu")->group(function (Router $router) {
    $router->get("list", [MenuController::class, "index"]);
});

Route::prefix("source")->group(function (Router $router) {
    $router->get("category", [SourceCategoryController::class, "index"]);
    $router->get("item", [SourceController::class, "index"]);
});

Route::prefix("msg")->group(function (Router $router) {
    $router->post("template/subscribe", [TemplateController::class, "subscribe"])->middleware(["auth"]);
});
