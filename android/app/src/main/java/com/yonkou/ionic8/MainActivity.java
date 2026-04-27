package com.yonkou.ionic8;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.database.sqlite.CapacitorSQLite;

public class MainActivity extends BridgeActivity {}


@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  registerPlugin(CapacitorSQLite.class);
}
