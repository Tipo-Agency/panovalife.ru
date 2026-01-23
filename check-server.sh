#!/bin/bash
# Команды для проверки сервера на наличие лишних файлов

echo "=== Проверка PHP файлов ==="
find /var/www/html -name "*.php" -type f 2>/dev/null | head -20

echo ""
echo "=== Проверка папки api ==="
ls -la /var/www/html/api/ 2>/dev/null || echo "Папка api не существует"

echo ""
echo "=== Проверка nginx конфигов ==="
grep -r "calltouch\|proxy" /etc/nginx/sites-enabled/ 2>/dev/null | head -10

echo ""
echo "=== Проверка .htaccess ==="
cat /var/www/html/.htaccess 2>/dev/null || echo ".htaccess не найден"

echo ""
echo "=== Проверка dist/api ==="
ls -la /var/www/html/dist/api/ 2>/dev/null || echo "Папка dist/api не существует"
