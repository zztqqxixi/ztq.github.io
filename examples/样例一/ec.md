# Git 常用命令速查表

## 基础操作
- 初始化仓库：
  ```bash
  git init
  ```
- 克隆仓库：
  ```bash
  git clone https://github.com/user/repo.git
  ```

## 分支管理
| 命令 | 作用 |
|------|------|
| `git branch` | 查看分支 |
| `git checkout -b dev` | 创建并切换分支 |

## 常见问题
### 撤销本地修改
```bash
git checkout -- filename
```
[查看示例](../../function/关键函数/关键)

### 推送冲突解决
1. 拉取远程最新代码：
   ```bash
   git pull origin main
   ```
2. 手动解决冲突后提交：
   ```bash
   git add .
   git commit -m "fix conflict"
   ```