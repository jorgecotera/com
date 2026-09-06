FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .
RUN mkdir -p /data /uploads
ENV DB_PATH=/data/asesoria.sqlite3 UPLOAD_DIR=/uploads
EXPOSE 8000
CMD ["gunicorn","-b","0.0.0.0:8000","--workers","2","--threads","4","--timeout","60","app:app"]
