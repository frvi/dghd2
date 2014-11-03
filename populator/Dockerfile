FROM python:3.4

COPY requirements.txt /
COPY populate.py /
RUN pip install -r /requirements.txt

CMD ["python", "/populate.py"]

