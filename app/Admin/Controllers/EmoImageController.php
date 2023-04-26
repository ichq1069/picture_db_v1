<?php
declare(strict_types=1);

namespace App\Admin\Controllers;

use App\Admin\Actions\Emo\EmoUpload;
use App\Library\SnowFlakeId;
use App\Models\Admin\EmoGroup;
use App\Models\Admin\EmoImage;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;

class EmoImageController extends AdminController
{
    protected $title = "表情包列表";

    public function grid(): Grid
    {
        $grid = new Grid(new EmoImage());
        $grid->filter(function ($filter) {
            $filter->disableIdFilter();
            $filter->column(1 / 2, function ($filter) {
                $filter->like('title', "图片名称");
                $filter->equal('is_show', "上架状态")->radio([
                    1 => '上架',
                    2 => '下架',
                ]);
            });
            $filter->column(1 / 2, function ($filter) {
                $filter->between('created_at', "创建时间")->datetime();
            });
        });
        $grid->paginate(15);
        $grid->model()->orderByDesc("id");

        $grid->column("group.title", "分组名称");
        $grid->column("title", "图片名称");
        $grid->column("img_back", "图片封面")->lightbox(['width' => 50, 'height' => 50]);
        $grid->column("width", "图片宽度");
        $grid->column("height", "图片高度");
        $grid->column("type", "图片类型");
        $grid->column('is_show', "上架状态")->display(function ($is_show) {
            if ($is_show == 1) {
                return "<span style='color:#059B50'>上架</span>";
            }
            return "<span style='color:#E70F0FFF'>下架</span>";
        });
        $grid->column("created_at", "创建时间");
        $grid->disableExport();
        $grid->actions(function ($actions) {
            $actions->disableView();
        });
        return $grid;
    }

    public function form(): Form
    {
        $form = new Form(new EmoImage());
        $form->hidden("uid", "图片编号")->default(SnowFlakeId::getId());
        $form->hidden("url", "图片地址")->default(env("QINIU_URL"));
        $form->text("title", "图片名称")->rules('required|max:20');
        $form->image("path", "图片管理")->uniqueName()->required();
        $form->radio("is_show", "上架状态")->options([1 => "上架", 2 => "下架"])->default(1);

        return $form;
    }
}
