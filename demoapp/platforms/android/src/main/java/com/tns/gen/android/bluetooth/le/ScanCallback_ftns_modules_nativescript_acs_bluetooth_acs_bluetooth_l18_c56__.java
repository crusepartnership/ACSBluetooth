package com.tns.gen.android.bluetooth.le;

public class ScanCallback_ftns_modules_nativescript_acs_bluetooth_acs_bluetooth_l18_c56__ extends android.bluetooth.le.ScanCallback implements com.tns.NativeScriptHashCodeProvider {
	public ScanCallback_ftns_modules_nativescript_acs_bluetooth_acs_bluetooth_l18_c56__(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onBatchScanResults(java.util.List param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onBatchScanResults", void.class, args);
	}

	public void onScanFailed(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onScanFailed", void.class, args);
	}

	public void onScanResult(int param_0, android.bluetooth.le.ScanResult param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onScanResult", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
