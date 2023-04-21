<?php
declare(strict_types = 1);

namespace App\Logic\User\Repository;

use App\Models\User\SourceItem;
use Closure;

class SourceRepository implements UserRepositoryInterface
{

    public function repositorySelect(Closure $closure, int $perSize, array $searchFields = []): array
    {
        $items = (new SourceItem())::query()
            ->where($closure)
            ->orderByDesc("orders")
            ->paginate($perSize, $searchFields);

        return [
            "items" => $items->items(),
            "total" => $items->total(),
            "page" => $items->currentPage(),
            "size" => $items->perPage(),
        ];
    }

    public function repositoryCreate(array $insertInfo): bool
    {
        // TODO: Implement repositoryCreate() method.
    }

    public function repositoryFind(Closure $closure, array $searchFields = []): array
    {
        $bean = (new SourceItem())::query()->where($closure)->first($searchFields);
        return !empty($bean) ? $bean->toArray() : [];
    }

    public function repositoryUpdate(array $updateWhere, array $updateInfo): int
    {
        // TODO: Implement repositoryUpdate() method.
    }

    public function repositoryWhereInDelete(array $deleteWhere, string $field): int
    {
        // TODO: Implement repositoryWhereInDelete() method.
    }

    public function repositoryDelete(array $deleteWhere): int
    {
        // TODO: Implement repositoryDelete() method.
    }
}
