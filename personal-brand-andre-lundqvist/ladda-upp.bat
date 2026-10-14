@echo off
chcp 65001 >nul
echo ===================================================
echo   Laddar upp projektet till GitHub...
echo ===================================================
set "PATH=C:\Users\Jakob\AppData\Local\Programs\MinGit\cmd;C:\Users\Jakob\AppData\Local\Programs\MinGit\mingw64\bin;%PATH%"
cd /d "%~dp0"
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo  Klart! Projektet har laddats upp till GitHub!
    echo ===================================================
) else (
    echo.
    echo Något gick fel vid uppladdningen. Kontrollera felmeddelandet ovan.
)
pause
