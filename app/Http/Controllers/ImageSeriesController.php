<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Library\Response;
use App\Logic\User\Service\ImageSeriesService;
use Illuminate\Http\JsonResponse;

class ImageSeriesController extends Controller
{
    public function index(): JsonResponse
    {
        return Response::success((new ImageSeriesService())->serviceAll(request()->all()));
    }
}
