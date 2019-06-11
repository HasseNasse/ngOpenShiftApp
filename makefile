build:
	rm -rf dist/ && \
	ng build

deployment:
	rm -rf dist/ && \
	ng build && \
	oc start-build bc/ngopenshiftap --from-dir=dist/ngOpenShiftApp --follow